import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5326Component } from './my-comp-5326.component';

describe('MyComp5326Component', () => {
  let component: MyComp5326Component;
  let fixture: ComponentFixture<MyComp5326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
