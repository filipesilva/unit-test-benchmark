import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8079Component } from './my-comp-8079.component';

describe('MyComp8079Component', () => {
  let component: MyComp8079Component;
  let fixture: ComponentFixture<MyComp8079Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8079Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8079Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
