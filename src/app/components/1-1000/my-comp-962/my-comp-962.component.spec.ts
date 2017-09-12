import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp962Component } from './my-comp-962.component';

describe('MyComp962Component', () => {
  let component: MyComp962Component;
  let fixture: ComponentFixture<MyComp962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
