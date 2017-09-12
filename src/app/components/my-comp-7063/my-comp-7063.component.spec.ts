import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7063Component } from './my-comp-7063.component';

describe('MyComp7063Component', () => {
  let component: MyComp7063Component;
  let fixture: ComponentFixture<MyComp7063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
