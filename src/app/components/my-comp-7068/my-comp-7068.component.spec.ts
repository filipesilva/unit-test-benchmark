import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7068Component } from './my-comp-7068.component';

describe('MyComp7068Component', () => {
  let component: MyComp7068Component;
  let fixture: ComponentFixture<MyComp7068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
