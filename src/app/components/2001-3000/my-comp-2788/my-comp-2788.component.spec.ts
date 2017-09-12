import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2788Component } from './my-comp-2788.component';

describe('MyComp2788Component', () => {
  let component: MyComp2788Component;
  let fixture: ComponentFixture<MyComp2788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
