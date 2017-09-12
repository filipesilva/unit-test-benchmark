import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7972Component } from './my-comp-7972.component';

describe('MyComp7972Component', () => {
  let component: MyComp7972Component;
  let fixture: ComponentFixture<MyComp7972Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7972Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7972Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
