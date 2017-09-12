import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4371Component } from './my-comp-4371.component';

describe('MyComp4371Component', () => {
  let component: MyComp4371Component;
  let fixture: ComponentFixture<MyComp4371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
