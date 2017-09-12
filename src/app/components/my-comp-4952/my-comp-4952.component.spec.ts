import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4952Component } from './my-comp-4952.component';

describe('MyComp4952Component', () => {
  let component: MyComp4952Component;
  let fixture: ComponentFixture<MyComp4952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
