import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8679Component } from './my-comp-8679.component';

describe('MyComp8679Component', () => {
  let component: MyComp8679Component;
  let fixture: ComponentFixture<MyComp8679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
