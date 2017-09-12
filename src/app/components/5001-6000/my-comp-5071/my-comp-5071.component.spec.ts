import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5071Component } from './my-comp-5071.component';

describe('MyComp5071Component', () => {
  let component: MyComp5071Component;
  let fixture: ComponentFixture<MyComp5071Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5071Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5071Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
