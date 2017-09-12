import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7092Component } from './my-comp-7092.component';

describe('MyComp7092Component', () => {
  let component: MyComp7092Component;
  let fixture: ComponentFixture<MyComp7092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
