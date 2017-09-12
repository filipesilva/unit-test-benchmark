import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3064Component } from './my-comp-3064.component';

describe('MyComp3064Component', () => {
  let component: MyComp3064Component;
  let fixture: ComponentFixture<MyComp3064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
