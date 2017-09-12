import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7053Component } from './my-comp-7053.component';

describe('MyComp7053Component', () => {
  let component: MyComp7053Component;
  let fixture: ComponentFixture<MyComp7053Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7053Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
