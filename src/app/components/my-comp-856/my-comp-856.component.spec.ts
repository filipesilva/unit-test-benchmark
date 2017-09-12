import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp856Component } from './my-comp-856.component';

describe('MyComp856Component', () => {
  let component: MyComp856Component;
  let fixture: ComponentFixture<MyComp856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
