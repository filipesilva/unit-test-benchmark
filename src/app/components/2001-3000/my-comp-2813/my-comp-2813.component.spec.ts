import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2813Component } from './my-comp-2813.component';

describe('MyComp2813Component', () => {
  let component: MyComp2813Component;
  let fixture: ComponentFixture<MyComp2813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
