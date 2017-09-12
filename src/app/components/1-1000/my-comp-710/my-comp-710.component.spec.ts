import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp710Component } from './my-comp-710.component';

describe('MyComp710Component', () => {
  let component: MyComp710Component;
  let fixture: ComponentFixture<MyComp710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
