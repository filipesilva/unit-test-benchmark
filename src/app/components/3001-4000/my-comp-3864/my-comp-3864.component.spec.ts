import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3864Component } from './my-comp-3864.component';

describe('MyComp3864Component', () => {
  let component: MyComp3864Component;
  let fixture: ComponentFixture<MyComp3864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
