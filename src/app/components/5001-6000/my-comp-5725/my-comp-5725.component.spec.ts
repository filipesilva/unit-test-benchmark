import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5725Component } from './my-comp-5725.component';

describe('MyComp5725Component', () => {
  let component: MyComp5725Component;
  let fixture: ComponentFixture<MyComp5725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
