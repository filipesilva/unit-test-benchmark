import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8107Component } from './my-comp-8107.component';

describe('MyComp8107Component', () => {
  let component: MyComp8107Component;
  let fixture: ComponentFixture<MyComp8107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
