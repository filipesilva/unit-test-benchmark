import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3063Component } from './my-comp-3063.component';

describe('MyComp3063Component', () => {
  let component: MyComp3063Component;
  let fixture: ComponentFixture<MyComp3063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
