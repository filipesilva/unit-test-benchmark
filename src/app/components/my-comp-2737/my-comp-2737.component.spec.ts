import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2737Component } from './my-comp-2737.component';

describe('MyComp2737Component', () => {
  let component: MyComp2737Component;
  let fixture: ComponentFixture<MyComp2737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
