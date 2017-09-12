import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5297Component } from './my-comp-5297.component';

describe('MyComp5297Component', () => {
  let component: MyComp5297Component;
  let fixture: ComponentFixture<MyComp5297Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5297Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
