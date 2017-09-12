import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5152Component } from './my-comp-5152.component';

describe('MyComp5152Component', () => {
  let component: MyComp5152Component;
  let fixture: ComponentFixture<MyComp5152Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5152Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5152Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
