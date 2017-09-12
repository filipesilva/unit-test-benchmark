import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp577Component } from './my-comp-577.component';

describe('MyComp577Component', () => {
  let component: MyComp577Component;
  let fixture: ComponentFixture<MyComp577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
