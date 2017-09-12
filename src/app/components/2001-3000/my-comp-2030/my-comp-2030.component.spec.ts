import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2030Component } from './my-comp-2030.component';

describe('MyComp2030Component', () => {
  let component: MyComp2030Component;
  let fixture: ComponentFixture<MyComp2030Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2030Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2030Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
