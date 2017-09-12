import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3272Component } from './my-comp-3272.component';

describe('MyComp3272Component', () => {
  let component: MyComp3272Component;
  let fixture: ComponentFixture<MyComp3272Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3272Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3272Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
