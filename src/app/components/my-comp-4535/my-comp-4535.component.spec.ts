import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4535Component } from './my-comp-4535.component';

describe('MyComp4535Component', () => {
  let component: MyComp4535Component;
  let fixture: ComponentFixture<MyComp4535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
