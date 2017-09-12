import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4280Component } from './my-comp-4280.component';

describe('MyComp4280Component', () => {
  let component: MyComp4280Component;
  let fixture: ComponentFixture<MyComp4280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
