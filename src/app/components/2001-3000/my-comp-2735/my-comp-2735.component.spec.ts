import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2735Component } from './my-comp-2735.component';

describe('MyComp2735Component', () => {
  let component: MyComp2735Component;
  let fixture: ComponentFixture<MyComp2735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
