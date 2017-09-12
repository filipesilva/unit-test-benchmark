import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5121Component } from './my-comp-5121.component';

describe('MyComp5121Component', () => {
  let component: MyComp5121Component;
  let fixture: ComponentFixture<MyComp5121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
