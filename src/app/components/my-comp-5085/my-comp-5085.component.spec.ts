import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5085Component } from './my-comp-5085.component';

describe('MyComp5085Component', () => {
  let component: MyComp5085Component;
  let fixture: ComponentFixture<MyComp5085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
