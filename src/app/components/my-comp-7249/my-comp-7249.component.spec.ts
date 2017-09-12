import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7249Component } from './my-comp-7249.component';

describe('MyComp7249Component', () => {
  let component: MyComp7249Component;
  let fixture: ComponentFixture<MyComp7249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
