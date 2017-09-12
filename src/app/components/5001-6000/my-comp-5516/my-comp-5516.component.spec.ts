import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5516Component } from './my-comp-5516.component';

describe('MyComp5516Component', () => {
  let component: MyComp5516Component;
  let fixture: ComponentFixture<MyComp5516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
