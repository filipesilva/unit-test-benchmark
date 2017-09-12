import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5248Component } from './my-comp-5248.component';

describe('MyComp5248Component', () => {
  let component: MyComp5248Component;
  let fixture: ComponentFixture<MyComp5248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
