import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4166Component } from './my-comp-4166.component';

describe('MyComp4166Component', () => {
  let component: MyComp4166Component;
  let fixture: ComponentFixture<MyComp4166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
