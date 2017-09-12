import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3274Component } from './my-comp-3274.component';

describe('MyComp3274Component', () => {
  let component: MyComp3274Component;
  let fixture: ComponentFixture<MyComp3274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
