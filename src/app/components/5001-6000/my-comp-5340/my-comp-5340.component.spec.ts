import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5340Component } from './my-comp-5340.component';

describe('MyComp5340Component', () => {
  let component: MyComp5340Component;
  let fixture: ComponentFixture<MyComp5340Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5340Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5340Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
