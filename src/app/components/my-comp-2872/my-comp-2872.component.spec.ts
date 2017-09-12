import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2872Component } from './my-comp-2872.component';

describe('MyComp2872Component', () => {
  let component: MyComp2872Component;
  let fixture: ComponentFixture<MyComp2872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
