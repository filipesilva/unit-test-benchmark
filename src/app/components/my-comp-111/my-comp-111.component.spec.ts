import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp111Component } from './my-comp-111.component';

describe('MyComp111Component', () => {
  let component: MyComp111Component;
  let fixture: ComponentFixture<MyComp111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
