import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4652Component } from './my-comp-4652.component';

describe('MyComp4652Component', () => {
  let component: MyComp4652Component;
  let fixture: ComponentFixture<MyComp4652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
