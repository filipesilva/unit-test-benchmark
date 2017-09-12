import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3085Component } from './my-comp-3085.component';

describe('MyComp3085Component', () => {
  let component: MyComp3085Component;
  let fixture: ComponentFixture<MyComp3085Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3085Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3085Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
