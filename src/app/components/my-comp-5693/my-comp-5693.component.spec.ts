import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5693Component } from './my-comp-5693.component';

describe('MyComp5693Component', () => {
  let component: MyComp5693Component;
  let fixture: ComponentFixture<MyComp5693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
