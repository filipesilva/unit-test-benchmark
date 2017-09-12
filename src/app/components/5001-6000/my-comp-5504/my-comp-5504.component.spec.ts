import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5504Component } from './my-comp-5504.component';

describe('MyComp5504Component', () => {
  let component: MyComp5504Component;
  let fixture: ComponentFixture<MyComp5504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
