import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5358Component } from './my-comp-5358.component';

describe('MyComp5358Component', () => {
  let component: MyComp5358Component;
  let fixture: ComponentFixture<MyComp5358Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5358Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5358Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
