import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp280Component } from './my-comp-280.component';

describe('MyComp280Component', () => {
  let component: MyComp280Component;
  let fixture: ComponentFixture<MyComp280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
