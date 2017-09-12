import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3387Component } from './my-comp-3387.component';

describe('MyComp3387Component', () => {
  let component: MyComp3387Component;
  let fixture: ComponentFixture<MyComp3387Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3387Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3387Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
