import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5486Component } from './my-comp-5486.component';

describe('MyComp5486Component', () => {
  let component: MyComp5486Component;
  let fixture: ComponentFixture<MyComp5486Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5486Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5486Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
