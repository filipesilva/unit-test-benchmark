import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7531Component } from './my-comp-7531.component';

describe('MyComp7531Component', () => {
  let component: MyComp7531Component;
  let fixture: ComponentFixture<MyComp7531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
