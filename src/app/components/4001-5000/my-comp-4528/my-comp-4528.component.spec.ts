import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4528Component } from './my-comp-4528.component';

describe('MyComp4528Component', () => {
  let component: MyComp4528Component;
  let fixture: ComponentFixture<MyComp4528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
