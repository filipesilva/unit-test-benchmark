import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp504Component } from './my-comp-504.component';

describe('MyComp504Component', () => {
  let component: MyComp504Component;
  let fixture: ComponentFixture<MyComp504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
