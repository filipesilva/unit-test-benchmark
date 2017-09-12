import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7173Component } from './my-comp-7173.component';

describe('MyComp7173Component', () => {
  let component: MyComp7173Component;
  let fixture: ComponentFixture<MyComp7173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
