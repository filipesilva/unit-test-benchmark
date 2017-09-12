import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp673Component } from './my-comp-673.component';

describe('MyComp673Component', () => {
  let component: MyComp673Component;
  let fixture: ComponentFixture<MyComp673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
