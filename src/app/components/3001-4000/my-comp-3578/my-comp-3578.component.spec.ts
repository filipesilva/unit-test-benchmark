import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3578Component } from './my-comp-3578.component';

describe('MyComp3578Component', () => {
  let component: MyComp3578Component;
  let fixture: ComponentFixture<MyComp3578Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3578Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3578Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
